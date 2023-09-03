import { Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { getSong, test } from './src/genius'

interface GeniusSettings {
}

const DEFAULT_SETTINGS: GeniusSettings = {
}

export default class GeniusPlugin extends Plugin {
	settings: GeniusSettings;

	async onload() {
		await this.loadSettings();

		this.addRibbonIcon("search", "Search Song", test)
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	};
};

