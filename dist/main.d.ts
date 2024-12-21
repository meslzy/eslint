import * as _typescript_eslint_utils_ts_eslint from '@typescript-eslint/utils/ts-eslint';

declare const stylisticId = "stylistic";
declare const unicornId = "unicorn";
declare const perfectionistId = "perfectionist";
interface MeslzyOptions {
    files?: string[];
    moreFiles?: string[];
    ignores?: string[];
    moreIgnores?: string[];
    rules?: Record<string, any>;
}
declare const meslzyConfigs: (options?: MeslzyOptions) => _typescript_eslint_utils_ts_eslint.FlatConfig.ConfigArray;

export { type MeslzyOptions, meslzyConfigs, perfectionistId, stylisticId, unicornId };
