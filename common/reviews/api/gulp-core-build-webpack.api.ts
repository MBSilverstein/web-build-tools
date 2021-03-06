// @public (undocumented)
interface IWebpackTaskConfig {
  config?: Webpack.Configuration;
  configPath: string;
  suppressWarnings?: (string | RegExp)[];
  webpack?: typeof Webpack;
}

// @public (undocumented)
class WebpackTask extends GulpTask<IWebpackTaskConfig> {
  // (undocumented)
  public executeTask(gulp: typeof Gulp, completeCallback: (error?: string) => void): void;
  // (undocumented)
  public isEnabled(buildConfig: IBuildConfig): boolean;
  // (undocumented)
  public loadSchema(): Object;
  // (undocumented)
  public name: string;
  // (undocumented)
  public readonly resources: Object;
  // (undocumented)
  public taskConfig: IWebpackTaskConfig;
}

// WARNING: Unsupported export: webpack
// WARNING: Unsupported export: default
// (No packageDescription for this package)
