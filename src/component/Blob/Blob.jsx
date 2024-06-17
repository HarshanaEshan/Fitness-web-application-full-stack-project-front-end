import React from 'react'
import './Blob.css'

const Blob = () => {
  return (
    <section>
      <div className="blob">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(255, 95, 109)' }} />
              <stop offset="100%" style={{ stopColor: 'rgb(255, 195, 113)' }} />
            </linearGradient>
          </defs>
          <path fill="url(#gradient)">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M436.5,303.5Q397,357,353,395Q309,433,255.5,414.5Q202,396,159,371.5Q116,347,61,298.5Q6,250,56.5,198Q107,146,145.5,97Q184,48,255,32Q326,16,370.5,73Q415,130,445.5,190Q476,250,436.5,303.5Z;
                M438.5,318Q437,386,382,437Q327,488,258.5,461Q190,434,125.5,410.5Q61,387,55.5,318.5Q50,250,61.5,185.5Q73,121,133,98Q193,75,258.5,48.5Q324,22,369,76.5Q414,131,427,190.5Q440,250,438.5,318Z;
                M401,302Q393,354,345,374.5Q297,395,235.5,440Q174,485,144.5,416.5Q115,348,90.5,299Q66,250,85.5,197.5Q105,145,151.5,117.5Q198,90,248,96Q298,102,367,108.5Q436,115,422.5,182.5Q409,250,401,302Z;
                M405,307Q407,364,356.5,393Q306,422,252.5,414Q199,406,138,390.5Q77,375,70,312.5Q63,250,69.5,186.5Q76,123,129.5,84Q183,45,242.5,68Q302,91,339,125Q376,159,389.5,204.5Q403,250,405,307Z;
                M451,322.5Q449,395,376,404.5Q303,414,246,426.5Q189,439,146,398Q103,357,92,303.5Q81,250,79,187Q77,124,132.5,92Q188,60,250,60Q312,60,367,92.5Q422,125,437.5,187.5Q453,250,451,322.5Z
              "
            />
          </path>
        </svg>
      </div>

      <div className="blob">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(255, 95, 109)' }} />
              <stop offset="100%" style={{ stopColor: 'rgb(255, 195, 113)' }} />
            </linearGradient>
          </defs>
          <path fill="url(#gradient)">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M436.5,303.5Q397,357,353,395Q309,433,255.5,414.5Q202,396,159,371.5Q116,347,61,298.5Q6,250,56.5,198Q107,146,145.5,97Q184,48,255,32Q326,16,370.5,73Q415,130,445.5,190Q476,250,436.5,303.5Z;
                M438.5,318Q437,386,382,437Q327,488,258.5,461Q190,434,125.5,410.5Q61,387,55.5,318.5Q50,250,61.5,185.5Q73,121,133,98Q193,75,258.5,48.5Q324,22,369,76.5Q414,131,427,190.5Q440,250,438.5,318Z;
                M401,302Q393,354,345,374.5Q297,395,235.5,440Q174,485,144.5,416.5Q115,348,90.5,299Q66,250,85.5,197.5Q105,145,151.5,117.5Q198,90,248,96Q298,102,367,108.5Q436,115,422.5,182.5Q409,250,401,302Z;
                M405,307Q407,364,356.5,393Q306,422,252.5,414Q199,406,138,390.5Q77,375,70,312.5Q63,250,69.5,186.5Q76,123,129.5,84Q183,45,242.5,68Q302,91,339,125Q376,159,389.5,204.5Q403,250,405,307Z;
                M451,322.5Q449,395,376,404.5Q303,414,246,426.5Q189,439,146,398Q103,357,92,303.5Q81,250,79,187Q77,124,132.5,92Q188,60,250,60Q312,60,367,92.5Q422,125,437.5,187.5Q453,250,451,322.5Z
              "
            />
          </path>
        </svg>
      </div>
    </section>
  )
}

export default Blob