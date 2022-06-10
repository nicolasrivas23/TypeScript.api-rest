export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
    id: number,
    date: string,
    weather: weather,
    visibility: visibility,
    comment: string
}

interface SpecialDiaryEntry extends DiaryEntry {
    flightNumber: number
}