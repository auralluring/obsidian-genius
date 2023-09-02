import { Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface LyricScraperSettings {
}

const DEFAULT_SETTINGS: LyricScraperSettings = {
}

export default class LyricScraper extends Plugin {
	settings: LyricScraperSettings;

	async onload() {
		await this.loadSettings();

		
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

