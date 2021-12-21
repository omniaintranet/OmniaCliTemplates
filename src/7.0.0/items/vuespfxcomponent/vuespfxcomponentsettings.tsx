﻿import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject} from "@omnia/fx";
import { VueComponentBase } from "@omnia/fx/ux";
import { SettingsServiceConstructor, SettingsService } from "@omnia/fx/services";
import { I$outputname$Settings, $outputname$Settings } from './I$outputname$Settings';

@Component
export default class $outputname$SettingsForm extends VueComponentBase implements IWebComponentInstance, I$outputname$Settings {
    @Prop() settingsKey: string;

    @Inject<SettingsServiceConstructor>(SettingsService)
    private settingsService: SettingsService<$outputname$Settings>;

    private settings: $outputname$Settings = { title: "" };

    created() {
        this.settingsService.getValue(this.settingsKey).then((result) => {
            this.settings = result || this.settings;
        });
    }

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    updateSettings() {
        this.settingsService.setValue(this.settingsKey, this.settings);
    }

    render(h) {
        return (
            <v-text-field
                single-line
                box
                label="Title"
                v-model={this.settings.title}
                onChange={() => this.updateSettings()}>
            </v-text-field>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$SettingsForm);
});