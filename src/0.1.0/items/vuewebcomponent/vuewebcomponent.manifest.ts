import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("$guid1$"), "$outputname$")
    .registerWebComponent({
        elementName: "$tagname$",
        entryPoint: "./$outputname$.jsx",
        typings: ["./I$outputname$.ts"]
    });