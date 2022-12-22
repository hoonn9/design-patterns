export interface DataSource {
    writeData(data: string): string;
    readData(): string;
}