{
  description = "WebArt dev env";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";

    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };

    devshell = {
      url = "github:numtide/devshell";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { flake-parts, ... }@inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [ inputs.devshell.flakeModule ];
      systems = [ "x86_64-linux" ];

      perSystem = { inputs', system, ... }:
        let
          pkgs = inputs'.nixpkgs.legacyPackages;
        in
        {
          devshells.default = {
            name = "WebArt dev env";

            motd = ''

              {202}🔨 Welcome to WebArt dev env!{reset}
              $(type -p menu &>/dev/null && menu)
            '';

            packages = with pkgs; [
              nodejs_22
              git
            ];
          };
        };
    };
}
