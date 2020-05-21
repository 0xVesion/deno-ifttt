export interface IfTTTResponse {
    status: number;
    message: string;
  }
  
  export class IfTTTApi {
    private readonly key: string;
  
    public constructor(key: string) {
      this.key = key;
    }
  
    public async trigger(
      event: string,
      value1?: string,
      value2?: string,
      value3?: string,
    ): Promise<IfTTTResponse> {
      const response = await fetch(
        `https://maker.ifttt.com/trigger/${event}/with/key/${this.key}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value1,
            value2,
            value3,
          }),
        },
      );
  
      return {
        status: response.status,
        message: await response.text(),
      };
    }
  }
  