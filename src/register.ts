import fs from 'fs';
import path from 'path';

export interface Preference {
    [key: string]: number;
}

export interface CandidateData {
    name: string;
    id: string;
    party: string;
}
interface ConfigData {
    candidates: CandidateData[];
}

export function getEntries(): ConfigData {
    const configPath: string = path.join(__dirname, '../candidate_config/candidate_config.json');
    const configData: ConfigData = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    return configData;
}

export function setPreference(configData: ConfigData): Preference {
    const preference: Preference = {};
    for (let i: number = 0; i < configData.candidates.length; i++) {
        preference[`p${i+1}`] = configData.candidates.length - i;
    }
    return preference;
}
