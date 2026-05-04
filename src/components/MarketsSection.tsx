import { useEffect, useRef, useState } from "react";
import { geoGraticule10, geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldAtlas from "world-atlas/countries-110m.json";
import { useIsMobile } from "@/hooks/use-mobile";

type CountryFeature = {
  geometry: unknown;
  properties?: {
    name?: string;
  };
  type: string;
};

type Market = {
  coordinates: [number, number];
  greeting: string;
  label: string;
  mapName?: string;
  type: "country" | "region";
};

type MarketMarker = Market & {
  x: number;
  y: number;
};

const markets: Market[] = [
  {
    greeting: "Hello",
    label: "USA",
    mapName: "United States of America",
    coordinates: [-98.5, 39.8],
    type: "country",
  },
  {
    greeting: "Hello",
    label: "UK",
    mapName: "United Kingdom",
    coordinates: [-2.5, 54.6],
    type: "country",
  },
  {
    greeting: "\u0645\u0631\u062d\u0628\u0627",
    label: "UAE",
    mapName: "United Arab Emirates",
    coordinates: [54.4, 24.3],
    type: "country",
  },
  {
    greeting: "\u0645\u0631\u062d\u0628\u0627",
    label: "Saudi Arabia",
    mapName: "Saudi Arabia",
    coordinates: [45.1, 23.8],
    type: "country",
  },
  {
    greeting: "\u0645\u0631\u062d\u0628\u0627",
    label: "Oman",
    mapName: "Oman",
    coordinates: [57.0, 21.2],
    type: "country",
  },
  {
    greeting: "\u09b9\u09cd\u09af\u09be\u09b2\u09cb",
    label: "Bangladesh",
    mapName: "Bangladesh",
    coordinates: [90.3, 23.8],
    type: "country",
  },
  {
    greeting: "\u0d86\u0dba\u0dd4\u0db6\u0ddd\u0dc0\u0db1\u0dca",
    label: "Sri Lanka",
    mapName: "Sri Lanka",
    coordinates: [80.7, 7.9],
    type: "country",
  },
  {
    greeting: "Xin ch\u00e0o",
    label: "Vietnam",
    mapName: "Vietnam",
    coordinates: [108.3, 14.8],
    type: "country",
  },
  {
    greeting: "Halo",
    label: "Malaysia",
    mapName: "Malaysia",
    coordinates: [102.0, 4.5],
    type: "country",
  },
  {
    greeting: "Hello",
    label: "Europe",
    coordinates: [12.0, 50.5],
    type: "region",
  },
  {
    greeting: "Hello",
    label: "Australia",
    mapName: "Australia",
    coordinates: [133.8, -25.3],
    type: "country",
  },
  {
    greeting: "\u3053\u3093\u306b\u3061\u306f",
    label: "Japan",
    mapName: "Japan",
    coordinates: [138.3, 36.3],
    type: "country",
  },
  {
    greeting: "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35",
    label: "Thailand",
    mapName: "Thailand",
    coordinates: [101.0, 15.2],
    type: "country",
  },
  {
    greeting: "Kamusta",
    label: "Philippines",
    mapName: "Philippines",
    coordinates: [122.3, 12.8],
    type: "country",
  },
];

const marketsByCountryName = new Map(
  markets.flatMap((market) => (market.mapName ? [[market.mapName, market] as const] : [])),
);

const atlasData = worldAtlas as {
  objects: {
    countries: object;
  };
};

const countryFeatureCollection = feature(
  atlasData as never,
  atlasData.objects.countries as never,
) as {
  features: CountryFeature[];
};

const mapWidth = 980;
const mapHeight = 560;

const filteredCountries = countryFeatureCollection.features.filter(
  (country) => country.properties?.name && country.properties.name !== "Antarctica",
);

const projection = geoNaturalEarth1().fitExtent(
  [
    [28, 30],
    [mapWidth - 28, mapHeight - 30],
  ],
  {
    features: filteredCountries as never,
    type: "FeatureCollection",
  } as never,
);

const pathGenerator = geoPath(projection);
const graticulePath = pathGenerator(geoGraticule10());

const marketMarkers = markets
  .map((market) => {
    const projectedPoint = projection(market.coordinates);

    if (!projectedPoint) {
      return null;
    }

    return {
      ...market,
      x: projectedPoint[0],
      y: projectedPoint[1],
    };
  })
  .filter((market): market is MarketMarker => market !== null);

const marketMarkersByLabel = new Map(marketMarkers.map((market) => [market.label, market]));

const highlightFill = "oklch(0.84 0.17 85)";
const highlightStroke = "oklch(0.4 0.08 135 / 0.78)";
const bubbleFill = "oklch(0.995 0.002 85)";
const bubbleShadow = "oklch(0.24 0.03 80)";
const bubbleText = "oklch(0.22 0.03 80)";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function MarketsSection() {
  const isMobile = useIsMobile();
  const mapFrameRef = useRef<HTMLDivElement | null>(null);
  const [activeMarketLabel, setActiveMarketLabel] = useState<string | null>(null);
  const [frameSize, setFrameSize] = useState({ width: mapWidth, height: mapHeight });

  useEffect(() => {
    const node = mapFrameRef.current;

    if (!node) {
      return;
    }

    const updateSize = () => {
      setFrameSize({
        width: node.clientWidth || mapWidth,
        height: node.clientHeight || mapHeight,
      });
    };

    updateSize();

    let observer: ResizeObserver | null = null;

    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(updateSize);
      observer.observe(node);
    }

    window.addEventListener("resize", updateSize);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const activeMarket = activeMarketLabel
    ? (marketMarkersByLabel.get(activeMarketLabel) ?? null)
    : null;

  const activeMarketName = activeMarket?.mapName ?? activeMarket?.label ?? "";
  const markerLeft = activeMarket ? (activeMarket.x / mapWidth) * frameSize.width : 0;
  const markerTop = activeMarket ? (activeMarket.y / mapHeight) * frameSize.height : 0;

  const preferredBubbleWidth = isMobile ? 210 : Math.max(210, activeMarketName.length * 8 + 74);
  const bubbleWidth = clamp(preferredBubbleWidth, 170, Math.max(170, frameSize.width - 20));
  const bubbleHeight = isMobile ? 88 : 96;
  const placeAbove = markerTop > bubbleHeight + 34;
  const bubbleAlignment = isMobile
    ? "center"
    : markerLeft < frameSize.width * 0.32
      ? "right"
      : markerLeft > frameSize.width * 0.68
        ? "left"
        : "center";

  const rawBubbleLeft =
    bubbleAlignment === "left"
      ? markerLeft - bubbleWidth - 18
      : bubbleAlignment === "right"
        ? markerLeft + 18
        : markerLeft - bubbleWidth / 2;
  const bubbleLeft = clamp(rawBubbleLeft, 10, frameSize.width - bubbleWidth - 10);
  const bubbleTop = clamp(
    placeAbove ? markerTop - bubbleHeight - 24 : markerTop + 18,
    10,
    frameSize.height - bubbleHeight - 10,
  );
  const tailOffset = clamp(markerLeft - bubbleLeft - 16, 26, bubbleWidth - 42);

  const clearActiveMarket = () => {
    setActiveMarketLabel(null);
  };

  const toggleMarket = (label: string) => {
    setActiveMarketLabel((current) => (current === label ? null : label));
  };

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.972 0.018 85) 0%, oklch(0.958 0.026 85) 100%)",
        }}
      />
      <div
        className="absolute left-[-10rem] top-14 -z-10 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "oklch(0.78 0.15 75 / 0.18)" }}
      />
      <div
        className="absolute right-[-8rem] bottom-10 -z-10 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "oklch(0.42 0.09 135 / 0.12)" }}
      />

      <div className="mx-auto w-full max-w-[1800px] px-3 py-12 sm:px-4 md:px-6 md:py-20 xl:px-8">
        <h2 className="mx-auto max-w-5xl text-center font-serif text-3xl leading-[1.08] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          Serving Buyers Across <span className="italic text-primary">Global Markets</span>
        </h2>

        <div className="mt-6 rounded-[1.6rem] border border-border/80 bg-card p-2 soft-shadow-lg sm:p-3 md:mt-10 md:rounded-[2rem] md:p-5 xl:p-6">
          <div className="overflow-hidden rounded-[1.35rem] border border-border/70 bg-card/70 p-1.5 sm:p-2 md:rounded-[1.7rem] md:p-4">
            <div
              ref={mapFrameRef}
              className="relative overflow-hidden rounded-[1.15rem] md:rounded-[1.45rem]"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, oklch(0.99 0.02 85) 0%, oklch(0.965 0.02 85) 45%, oklch(0.945 0.025 85) 100%)",
              }}
              onClick={clearActiveMarket}
            >
              <svg
                viewBox={`0 0 ${mapWidth} ${mapHeight}`}
                className="block h-auto min-h-[16rem] w-full sm:min-h-[20rem] md:min-h-[34rem] xl:min-h-[72vh]"
                role="img"
                aria-label="World map highlighting Ekvira Export House target markets"
              >
                <defs>
                  <filter id="market-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <rect width={mapWidth} height={mapHeight} rx="28" fill="oklch(0.975 0.018 85)" />

                {graticulePath ? (
                  <path
                    d={graticulePath}
                    fill="none"
                    stroke="oklch(0.82 0.03 85 / 0.45)"
                    strokeWidth="1"
                  />
                ) : null}

                {filteredCountries.map((country) => {
                  const name = country.properties?.name ?? "Unknown";
                  const market = marketsByCountryName.get(name);
                  const isHighlighted = Boolean(market);
                  const path = pathGenerator(country as never);

                  if (!path) {
                    return null;
                  }

                  return (
                    <path
                      key={name}
                      d={path}
                      role={isHighlighted ? "button" : undefined}
                      fill={isHighlighted ? highlightFill : "oklch(0.91 0.02 85)"}
                      stroke={isHighlighted ? highlightStroke : "oklch(0.8 0.03 85)"}
                      strokeWidth={isHighlighted ? 1.5 : 0.9}
                      style={{ cursor: isHighlighted ? "pointer" : "default" }}
                      tabIndex={isHighlighted ? 0 : undefined}
                      aria-label={
                        market ? `${market.mapName ?? market.label}: ${market.greeting}` : undefined
                      }
                      onMouseEnter={() => {
                        if (!isMobile && market) {
                          setActiveMarketLabel(market.label);
                        }
                      }}
                      onMouseLeave={() => {
                        if (!isMobile && market) {
                          setActiveMarketLabel((current) =>
                            current === market.label ? null : current,
                          );
                        }
                      }}
                      onFocus={() => {
                        if (market) {
                          setActiveMarketLabel(market.label);
                        }
                      }}
                      onBlur={() => {
                        if (!isMobile && market) {
                          setActiveMarketLabel((current) =>
                            current === market.label ? null : current,
                          );
                        }
                      }}
                      onClick={(event) => {
                        if (!market) {
                          return;
                        }

                        event.stopPropagation();
                        toggleMarket(market.label);
                      }}
                      onKeyDown={(event) => {
                        if (!market) {
                          return;
                        }

                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          event.stopPropagation();
                          toggleMarket(market.label);
                        }

                        if (event.key === "Escape") {
                          clearActiveMarket();
                        }
                      }}
                    />
                  );
                })}

                {marketMarkers.map((market) => {
                  const glowRadius = isMobile
                    ? market.type === "region"
                      ? 15
                      : 12
                    : market.type === "region"
                      ? 12
                      : 9;
                  const dotRadius = isMobile
                    ? market.type === "region"
                      ? 6.6
                      : 5.4
                    : market.type === "region"
                      ? 5.5
                      : 4.2;
                  const hitRadius = isMobile
                    ? market.type === "region"
                      ? 34
                      : 28
                    : market.type === "region"
                      ? 18
                      : 15;

                  return (
                    <g
                      key={market.label}
                      transform={`translate(${market.x}, ${market.y})`}
                      filter="url(#market-glow)"
                    >
                      <title>{`${market.mapName ?? market.label}: ${market.greeting}`}</title>
                      <circle r={glowRadius} fill="oklch(0.84 0.17 85 / 0.24)" />
                      <circle
                        r={dotRadius}
                        fill={highlightFill}
                        stroke="oklch(1 0 0 / 0.95)"
                        strokeWidth="2"
                      />
                      <circle
                        r={hitRadius}
                        role="button"
                        fill="transparent"
                        style={{ cursor: "pointer" }}
                        tabIndex={0}
                        aria-label={`${market.mapName ?? market.label}: ${market.greeting}`}
                        onMouseEnter={() => {
                          if (!isMobile) {
                            setActiveMarketLabel(market.label);
                          }
                        }}
                        onMouseLeave={() => {
                          if (!isMobile) {
                            setActiveMarketLabel((current) =>
                              current === market.label ? null : current,
                            );
                          }
                        }}
                        onFocus={() => setActiveMarketLabel(market.label)}
                        onBlur={() => {
                          if (!isMobile) {
                            setActiveMarketLabel((current) =>
                              current === market.label ? null : current,
                            );
                          }
                        }}
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleMarket(market.label);
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            event.stopPropagation();
                            toggleMarket(market.label);
                          }

                          if (event.key === "Escape") {
                            clearActiveMarket();
                          }
                        }}
                      />
                    </g>
                  );
                })}
              </svg>

              {activeMarket ? (
                <div
                  className="pointer-events-none absolute z-20"
                  style={{
                    left: `${bubbleLeft}px`,
                    top: `${bubbleTop}px`,
                    width: `${bubbleWidth}px`,
                  }}
                >
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-[1.7rem]"
                      style={{
                        background: bubbleShadow,
                        transform: "translate(6px, 7px)",
                      }}
                    />

                    <div
                      className="absolute h-7 w-7"
                      style={{
                        background: bubbleShadow,
                        borderRadius: placeAbove ? "0 0 0.85rem 0" : "0.85rem 0 0 0",
                        left: `${tailOffset + 6}px`,
                        top: placeAbove ? `${bubbleHeight - 2}px` : "-4px",
                        transform: "rotate(45deg)",
                      }}
                    />

                    <div
                      className="absolute h-7 w-7"
                      style={{
                        background: bubbleFill,
                        borderRadius: placeAbove ? "0 0 0.85rem 0" : "0.85rem 0 0 0",
                        left: `${tailOffset}px`,
                        top: placeAbove ? `${bubbleHeight - 8}px` : "-10px",
                        transform: "rotate(45deg)",
                      }}
                    />

                    <div
                      className="relative rounded-[1.7rem] px-4 pb-3 pt-3"
                      style={{ background: bubbleFill }}
                    >
                      <div
                        className="absolute left-4 top-3 grid h-9 w-9 place-items-center rounded-full"
                        style={{ background: bubbleShadow }}
                      >
                        <span
                          className="font-serif text-2xl leading-none"
                          style={{ color: bubbleFill }}
                        >
                          "
                        </span>
                      </div>

                      <div className="pl-10 pr-1 text-center">
                        <div
                          className="text-base font-semibold leading-tight sm:text-lg md:text-[1.55rem]"
                          style={{ color: bubbleText }}
                        >
                          {activeMarket.greeting}
                        </div>
                        <div
                          className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-xs"
                          style={{ color: bubbleText }}
                        >
                          {activeMarketName}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
