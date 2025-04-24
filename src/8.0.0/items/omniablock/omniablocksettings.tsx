import { useBlockSettingsWriter, defineVueComponent, StyleFlow } from "@omnia/fx/ux";
import $outputname$SettingsStyles from "./$outputname$Settings.css";

export interface $outputname$BlockSettings {
    title: string;
}

export default defineVueComponent({
    setup(props) {
        const settings = useBlockSettingsWriter<$outputname$BlockSettings>({
            defaultValue: { title: "my block title" }
        });
        const $outputname$Classes = StyleFlow.use($outputname$SettingsStyles);

        return () => (
            <o.panel>
                <o.input.field
                    v-model={settings.title}
                    label="Title">
                </o.input.field>
            </o.panel>
        );
    }
});

