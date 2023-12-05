import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const myCustomTheme: CustomThemeConfig = {
  name: "biM-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "8px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "255 255 255",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "255 255 255",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #9EFF4E
    "--color-primary-50": "240 255 228", // #f0ffe4
    "--color-primary-100": "236 255 220", // #ecffdc
    "--color-primary-200": "231 255 211", // #e7ffd3
    "--color-primary-300": "216 255 184", // #d8ffb8
    "--color-primary-400": "187 255 131", // #bbff83
    "--color-primary-500": "158 255 78", // #9EFF4E
    "--color-primary-600": "142 230 70", // #8ee646
    "--color-primary-700": "119 191 59", // #77bf3b
    "--color-primary-800": "95 153 47", // #5f992f
    "--color-primary-900": "77 125 38", // #4d7d26
    // secondary | #2A2A2A
    "--color-secondary-50": "223 223 223", // #dfdfdf
    "--color-secondary-100": "212 212 212", // #d4d4d4
    "--color-secondary-200": "202 202 202", // #cacaca
    "--color-secondary-300": "170 170 170", // #aaaaaa
    "--color-secondary-400": "106 106 106", // #6a6a6a
    "--color-secondary-500": "42 42 42", // #2A2A2A
    "--color-secondary-600": "38 38 38", // #262626
    "--color-secondary-700": "32 32 32", // #202020
    "--color-secondary-800": "25 25 25", // #191919
    "--color-secondary-900": "21 21 21", // #151515
    // tertiary | #E5FF70
    "--color-tertiary-50": "251 255 234", // #fbffea
    "--color-tertiary-100": "250 255 226", // #faffe2
    "--color-tertiary-200": "249 255 219", // #f9ffdb
    "--color-tertiary-300": "245 255 198", // #f5ffc6
    "--color-tertiary-400": "237 255 155", // #edff9b
    "--color-tertiary-500": "229 255 112", // #E5FF70
    "--color-tertiary-600": "206 230 101", // #cee665
    "--color-tertiary-700": "172 191 84", // #acbf54
    "--color-tertiary-800": "137 153 67", // #899943
    "--color-tertiary-900": "112 125 55", // #707d37
    // success | #84cc16
    "--color-success-50": "237 247 220", // #edf7dc
    "--color-success-100": "230 245 208", // #e6f5d0
    "--color-success-200": "224 242 197", // #e0f2c5
    "--color-success-300": "206 235 162", // #ceeba2
    "--color-success-400": "169 219 92", // #a9db5c
    "--color-success-500": "132 204 22", // #84cc16
    "--color-success-600": "119 184 20", // #77b814
    "--color-success-700": "99 153 17", // #639911
    "--color-success-800": "79 122 13", // #4f7a0d
    "--color-success-900": "65 100 11", // #41640b
    // warning | #EAB308
    "--color-warning-50": "252 244 218", // #fcf4da
    "--color-warning-100": "251 240 206", // #fbf0ce
    "--color-warning-200": "250 236 193", // #faecc1
    "--color-warning-300": "247 225 156", // #f7e19c
    "--color-warning-400": "240 202 82", // #f0ca52
    "--color-warning-500": "234 179 8", // #EAB308
    "--color-warning-600": "211 161 7", // #d3a107
    "--color-warning-700": "176 134 6", // #b08606
    "--color-warning-800": "140 107 5", // #8c6b05
    "--color-warning-900": "115 88 4", // #735804
    // error | #D41976
    "--color-error-50": "249 221 234", // #f9ddea
    "--color-error-100": "246 209 228", // #f6d1e4
    "--color-error-200": "244 198 221", // #f4c6dd
    "--color-error-300": "238 163 200", // #eea3c8
    "--color-error-400": "225 94 159", // #e15e9f
    "--color-error-500": "212 25 118", // #D41976
    "--color-error-600": "191 23 106", // #bf176a
    "--color-error-700": "159 19 89", // #9f1359
    "--color-error-800": "127 15 71", // #7f0f47
    "--color-error-900": "104 12 58", // #680c3a
    // surface | #0D0D0D
    "--color-surface-50": "219 219 219", // #dbdbdb
    "--color-surface-100": "207 207 207", // #cfcfcf
    "--color-surface-200": "195 195 195", // #c3c3c3
    "--color-surface-300": "158 158 158", // #9e9e9e
    "--color-surface-400": "86 86 86", // #565656
    "--color-surface-500": "13 13 13", // #0D0D0D
    "--color-surface-600": "12 12 12", // #0c0c0c
    "--color-surface-700": "10 10 10", // #0a0a0a
    "--color-surface-800": "8 8 8", // #080808
    "--color-surface-900": "6 6 6", // #060606
  },
};
