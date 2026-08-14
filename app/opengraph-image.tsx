import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

export const alt =
  "Handpoke Travels — a handpoke tattoo artist at work. Tattoos that travel with you.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const fontsDir = join(process.cwd(), "app/fonts");
const imagesDir = join(process.cwd(), "public/images");

const [juliette, bodoni, cormorant, jost, photo, logo] = await Promise.all([
  readFile(join(fontsDir, "Juliette.otf")),
  readFile(join(fontsDir, "og/bodoni-400.ttf")),
  readFile(join(fontsDir, "og/cormorant-600.ttf")),
  readFile(join(fontsDir, "og/jost-400.ttf")),
  sharp(join(imagesDir, "working.png"))
    .resize(640, 640, { fit: "cover", position: "centre" })
    .jpeg({ quality: 76 })
    .toBuffer(),
  sharp(join(imagesDir, "logo.png"))
    .resize(160, 160)
    .png({ compressionLevel: 9 })
    .toBuffer(),
]);

const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#e6d4c3",
          color: "#1a1a1a",
          padding: "64px 72px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 560,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 36,
            }}
          >
            <img src={logoSrc} width={64} height={64} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 16,
                fontFamily: "Cormorant",
                fontSize: 22,
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                lineHeight: 1.15,
              }}
            >
              <span>Handpoke</span>
              <span>Travels</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Jost",
              fontSize: 18,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#7c4634",
              marginBottom: 20,
            }}
          >
            Ink stories · Mark souls
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 0.92,
            }}
          >
            <span
              style={{
                fontFamily: "Bodoni",
                fontSize: 76,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Tattoos
            </span>
            <span
              style={{
                fontFamily: "Juliette",
                fontSize: 68,
                color: "#b0745a",
                marginLeft: 12,
                marginTop: 4,
                marginBottom: 4,
              }}
            >
              that travel
            </span>
            <span
              style={{
                fontFamily: "Bodoni",
                fontSize: 76,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              with you
            </span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              width: 220,
              height: 3,
              backgroundColor: "#b0745a",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            width: 468,
            height: 468,
            borderRadius: "47% 53% 50% 50% / 49% 46% 54% 51%",
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(-9deg)",
            boxShadow:
              "0 0 0 3px #e6d4c3, 0 0 0 8px #b0745a, 0 22px 48px rgba(40, 24, 10, 0.28)",
          }}
        >
          <img
            src={photoSrc}
            width={580}
            height={580}
            style={{
              objectFit: "cover",
              objectPosition: "center 38%",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Juliette", data: juliette, weight: 400, style: "normal" },
        { name: "Bodoni", data: bodoni, weight: 400, style: "normal" },
        { name: "Cormorant", data: cormorant, weight: 600, style: "normal" },
        { name: "Jost", data: jost, weight: 400, style: "normal" },
      ],
    },
  );
}
