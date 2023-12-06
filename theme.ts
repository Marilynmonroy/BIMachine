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
    "--on-secondary": "0 0 0",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "255 255 255",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #1082F4
    "--color-primary-50": "219 236 253", // #dbecfd
    "--color-primary-100": "207 230 253", // #cfe6fd
    "--color-primary-200": "195 224 252", // #c3e0fc
    "--color-primary-300": "159 205 251", // #9fcdfb
    "--color-primary-400": "88 168 247", // #58a8f7
    "--color-primary-500": "16 130 244", // #1082F4
    "--color-primary-600": "14 117 220", // #0e75dc
    "--color-primary-700": "12 98 183", // #0c62b7
    "--color-primary-800": "10 78 146", // #0a4e92
    "--color-primary-900": "8 64 120", // #084078
    // secondary | #FF763A
    "--color-secondary-50": "255 234 225", // #ffeae1
    "--color-secondary-100": "255 228 216", // #ffe4d8
    "--color-secondary-200": "255 221 206", // #ffddce
    "--color-secondary-300": "255 200 176", // #ffc8b0
    "--color-secondary-400": "255 159 117", // #ff9f75
    "--color-secondary-500": "255 118 58", // #FF763A
    "--color-secondary-600": "230 106 52", // #e66a34
    "--color-secondary-700": "191 89 44", // #bf592c
    "--color-secondary-800": "153 71 35", // #994723
    "--color-secondary-900": "125 58 28", // #7d3a1c
    // tertiary | #3498DB
    "--color-tertiary-50": "225 240 250", // #e1f0fa
    "--color-tertiary-100": "214 234 248", // #d6eaf8
    "--color-tertiary-200": "204 229 246", // #cce5f6
    "--color-tertiary-300": "174 214 241", // #aed6f1
    "--color-tertiary-400": "113 183 230", // #71b7e6
    "--color-tertiary-500": "52 152 219", // #3498DB
    "--color-tertiary-600": "47 137 197", // #2f89c5
    "--color-tertiary-700": "39 114 164", // #2772a4
    "--color-tertiary-800": "31 91 131", // #1f5b83
    "--color-tertiary-900": "25 74 107", // #194a6b
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
