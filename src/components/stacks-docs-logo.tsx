import React, { forwardRef } from "react"

import { Box, BoxProps } from "@stacks/ui"
import { ForwardRefExoticComponentWithAs, forwardRefWithAs } from "@stacks/ui-core"

export const StacksDocsLogo: ForwardRefExoticComponentWithAs<BoxProps, "svg"> = forwardRefWithAs<
  BoxProps,
  "svg"
>((props, ref) => {
  const { width = "156px", color = "white", as = "svg", ...rest } = props
  return (
    <Box
      display="block"
      as={as}
      width={width}
      height="auto"
      viewBox="0 0 3408 400"
      fill="none"
      ref={ref}
      color={color}
      {...rest}>
      <path
        d="M278.086 271.369L363.056 400H299.58L199.832 248.866L100.084 400H36.9437L121.914 271.704H0V223.006H400V271.369H278.086Z"
        fill="currentColor"
      />
      <path
        d="M400 126.952V175.651V175.987H0V126.952H119.563L35.6003 0H99.0764L199.832 153.149L300.924 0H364.4L280.437 126.952H400Z"
        fill="currentColor"
      />
      <path
        d="M577 261.236C578.533 331.754 634.232 381.832 720.591 381.832C797.752 381.832 852.94 336.353 852.94 272.989C853.451 202.471 795.708 183.564 736.432 172.833C680.222 163.124 643.43 155.459 643.43 118.667C643.43 84.941 671.535 67.567 711.904 67.567C754.828 67.567 784.977 92.095 789.065 128.376H846.808C843.742 63.99 790.087 18 711.904 18C636.787 18 584.665 60.924 584.665 122.755C584.665 193.784 640.875 212.691 700.151 222.911C756.872 233.131 794.175 241.307 794.175 279.121C794.175 313.358 763.515 332.265 721.102 332.265C671.024 332.265 637.809 304.16 634.743 262.258L577 261.236Z"
        fill="currentColor"
      />
      <path
        d="M910.803 307.737C910.803 355.26 932.265 378.766 982.343 378.766H1035.49V330.221H993.585C973.656 330.221 966.502 322.556 966.502 302.116V165.679H1029.35V117.134H966.502V44.061H910.803V117.134H865.324V165.679H910.803V307.737Z"
        fill="currentColor"
      />
      <path
        d="M1260.44 117.134L1253.8 155.459C1236.93 131.442 1209.34 114.068 1168.46 114.068C1097.43 114.068 1044.8 167.212 1044.8 247.95C1044.8 331.754 1097.43 381.832 1168.46 381.832C1209.34 381.832 1236.93 362.414 1253.8 338.908L1259.93 378.766H1308.47V117.134H1260.44ZM1177.66 335.331C1131.67 335.331 1101.52 299.561 1101.52 247.95C1101.52 196.85 1131.67 161.08 1177.66 161.08C1223.65 161.08 1253.8 197.361 1253.8 248.972C1253.8 299.561 1223.65 335.331 1177.66 335.331Z"
        fill="currentColor"
      />
      <path
        d="M1598.48 284.742H1542.27C1535.63 315.402 1512.13 334.82 1477.89 334.82C1433.43 334.82 1404.3 299.05 1404.3 247.439C1404.3 196.339 1433.43 161.08 1477.89 161.08C1511.1 161.08 1534.61 180.498 1541.76 210.136H1598.48C1588.26 151.371 1545.34 114.068 1479.42 114.068C1399.71 114.068 1347.58 167.212 1347.58 247.439C1347.58 328.177 1399.19 381.832 1477.89 381.832C1544.83 381.832 1588.26 344.529 1598.48 284.742Z"
        fill="currentColor"
      />
      <path
        d="M1637.62 21.066V378.766H1692.81V311.825L1739.31 262.769L1816.99 378.766H1882.39L1778.66 222.4L1876.26 117.134H1812.39L1692.81 244.884V21.066H1637.62Z"
        fill="currentColor"
      />
      <path
        d="M1887.8 292.407C1889.33 349.128 1936.85 381.832 2006.35 381.832C2069.2 381.832 2116.22 350.15 2116.22 300.072C2116.22 241.818 2067.67 228.532 2008.91 221.889C1971.6 217.29 1946.56 215.246 1946.56 190.718C1946.56 169.767 1968.03 156.481 2000.22 156.481C2032.41 156.481 2055.41 173.855 2057.96 197.361H2111.62C2108.04 143.706 2063.07 114.068 1999.2 114.068C1937.37 113.557 1892.91 145.75 1892.91 195.317C1892.91 249.483 1939.92 261.747 1998.69 268.901C2038.54 274.011 2062.05 276.566 2062.05 304.16C2062.05 325.622 2039.05 338.908 2005.84 338.908C1968.03 338.908 1942.99 319.49 1940.94 292.407H1887.8Z"
        fill="currentColor"
      />
      <path
        d="M2283.39 378.6H2396.67C2506.91 378.6 2576 305.956 2576 200.8C2576 95.136 2506.91 23 2396.67 23H2283.39V378.6ZM2341.81 327.8V73.8H2396.67C2474.4 73.8 2516.05 124.6 2516.05 200.8C2516.05 277 2474.4 327.8 2396.67 327.8H2341.81Z"
        fill="#9A9A9A"
      />
      <path
        d="M2739.45 381.648C2818.7 381.648 2872.04 328.308 2872.04 248.552C2872.04 169.304 2818.7 115.456 2739.45 115.456C2660.2 115.456 2606.86 169.304 2606.86 248.552C2606.86 328.308 2660.2 381.648 2739.45 381.648ZM2739.45 334.912C2693.22 334.912 2663.25 298.844 2663.25 248.552C2663.25 198.26 2693.22 162.192 2739.45 162.192C2785.68 162.192 2816.16 198.26 2816.16 248.552C2816.16 298.844 2785.68 334.912 2739.45 334.912Z"
        fill="#9A9A9A"
      />
      <path
        d="M3150.85 285.128H3094.97C3088.37 315.608 3065 334.912 3030.96 334.912C2986.77 334.912 2957.81 299.352 2957.81 248.044C2957.81 197.244 2986.77 162.192 3030.96 162.192C3063.98 162.192 3087.35 181.496 3094.46 210.96H3150.85C3140.69 152.54 3098.02 115.456 3032.49 115.456C2953.24 115.456 2901.42 168.288 2901.42 248.044C2901.42 328.308 2952.73 381.648 3030.96 381.648C3097.51 381.648 3140.69 344.564 3150.85 285.128Z"
        fill="#9A9A9A"
      />
      <path
        d="M3180.62 292.748C3182.14 349.136 3229.38 381.648 3298.47 381.648C3360.96 381.648 3407.69 350.152 3407.69 300.368C3407.69 242.456 3359.43 229.248 3301.01 222.644C3263.93 218.072 3239.04 216.04 3239.04 191.656C3239.04 170.828 3260.37 157.62 3292.38 157.62C3324.38 157.62 3347.24 174.892 3349.78 198.26H3403.12C3399.56 144.92 3354.86 115.456 3291.36 115.456C3229.89 114.948 3185.7 146.952 3185.7 196.228C3185.7 250.076 3232.43 262.268 3290.85 269.38C3330.48 274.46 3353.84 277 3353.84 304.432C3353.84 325.768 3330.98 338.976 3297.96 338.976C3260.37 338.976 3235.48 319.672 3233.45 292.748H3180.62Z"
        fill="#9A9A9A"
      />
    </Box>
  )
})
