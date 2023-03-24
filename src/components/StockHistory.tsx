export let label, label2;
// export default class StocksHistory {
//   public static async getMultipleStocks(): Promise<any[]> {
//     const dataSources: any[] = [await this.getMicrosoftStock()];

//     return new Promise<any[]>((resolve, reject) => {
//       resolve(dataSources);
//     });
//   }

//   public static async getMicrosoftStock(): Promise<StockItem[]> {
//     let url =
//       "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
//     let response = await fetch(url);
//     let jsonData = await response.json();
//     let stockData = this.convertData(jsonData);
//     label = stockData[stockData.length - 1].close;
//     label2 = stockData[stockData.length - 2].close;
//     console.log("label", label2);
//     (stockData as any).__dataIntents = {
//       close: ["SeriesTitle/Microsoft"],
//     };
//     return new Promise<StockItem[]>((resolve, reject) => {
//       resolve(stockData);
//     });
//   }

//   public static convertData(jsonData: any[]): StockItem[] {
//     let stockItems: StockItem[] = [];

//     for (let json of jsonData) {
//       let parts = json.date.split("-"); // "2020-01-01"
//       let item = new StockItem();
//       item.date = new Date(parts[3], parts[1], parts[1]);
//       item.open = json.open;
//       item.high = json.high;
//       item.low = json.low;
//       item.close = json.close;
//       item.volume = json.volume;
//       stockItems.push(item);
//     }
//     return stockItems;
//   }
// }

// export class StockItem {
//   public open?: number;
//   public close?: number;
//   public high?: number;
//   public low?: number;
//   public volume?: number;

//   public date?: Date;
// }
export default class StocksHistory {
  public static async getMultipleStocks(): Promise<any[]> {
    const dataSources: any[] = [await this.getStockData()];

    return new Promise<any[]>((resolve, reject) => {
      resolve(dataSources);
    });
  }
  public static async getStockData(): Promise<StockItem[]> {
    let url = "https://retoolapi.dev/hx4PNG/dayapi";
    let response = await fetch(url);
    let jsonData = await response.json();
    let stockData = this.convertData(jsonData);
    let ext = this.extendData(stockData);
    label = stockData[stockData.length - 1].close;
    label2 = stockData[stockData.length - 2].close;
    (stockData as any).__dataIntents = {
      close: ["SeriesTitle/UNOfinance"],
    };
    return new Promise<StockItem[]>((resolve, reject) => {
      resolve(stockData);
    });
  }
  public static convertData(jsonData: any[]): StockItem[] {
    let stockItems: StockItem[] = [];
    let i = 0;
    for (let json of jsonData) {
      let parts = json.key.split(" ");
      let item = new StockItem();
      const date = parts[0].split("-");
      let cur = new Date(date[2], date[1], date[0]).getTime();
      item.date = new Date(cur + i * 60 * 60 * 1000);
      item.open = parseFloat(json.open);
      item.high = parseFloat(json.high);
      item.low = parseFloat(json.low);
      item.close = parseFloat(json.close);
      item.volume = parseInt(json.volume);
      stockItems.push(item);
      i += 1;
    }

    return stockItems;
  }
  public static extendData(jsonData: any[]): any[] {
    // console.log("previous data", jsonData);
    let stockItems: StockItem[] = [];
    console.log("function...");
    for (let j = 0; j < 5; j++) {
      let nextMonthData: StockItem[] = [];
      // console.log("loop");
      for (let json of jsonData) {
        // console.log("inner loop");
        let date = json.date;
        let newDate = this.addMonths(new Date(), 2);
        // console.log(newDate, "newdate");
        let newItem = { ...json, date: newDate };
        nextMonthData.push(newItem);
      }
      jsonData.push(...nextMonthData);
    }
    console.log("end..");
    console.log("new Data", jsonData);
    return jsonData;
  }
  public static addMonths(date, months) {
    date.setMonth(date.getMonth() + months);

    return date;
  }
}

export class StockItem {
  public open?: number;
  public close?: number;
  public high?: number;
  public low?: number;
  public volume?: number;
  public date?: Date;
}
