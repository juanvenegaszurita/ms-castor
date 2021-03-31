import axios, {AxiosRequestConfig, AxiosPromise, AxiosInstance} from "axios";

export class HttpClient {
  // Permite setear el timeout para evitar esperas largas, puede ser seteado en casos especiales
  private defaultTimeout = 10000;
  // Permite setear headers base para todas las peticiones
  private headers = { };
  // Propiedad privada donde almacenamos instancias de axios
  private instance: AxiosInstance;

  /**
   * @param {string} baseURL Permite setear una url base, la cual sera concatenada 
   * con cada url ingresada en los metodos, por defecto, se setea 
   * como string vacio.
   * @param {object} headers Permite setear los valores para cada instancia de clase, segun sea 
   * necesario, son concatenados con los headers globales, por defecto, se setea 
   * como objeto vacio. 
   * @param {number} timeout Permite setear el timeout para evitar esperas largas, puede
   * ser seteado en casos especiales
   */
  constructor(baseURL: string = '', headers: object = {}, timeout?: number) {
    this.instance = axios.create({ baseURL, timeout: (timeout? timeout : this.defaultTimeout), headers: { ...headers, ...this.headers } });
  }

  /**
   * 
   * @param {string} url 
   * @param {AxiosRequestConfig} config 
   * @returns {AxiosPromise}
   */
  get<T>(url: string, config: AxiosRequestConfig = {}): AxiosPromise {
    return this.instance.get<T>(url,config);
  }

  /**
   * 
   * @param {string} url 
   * @param {AxiosRequestConfig} config 
   * @returns {AxiosPromise}
   */
  delete<T>(url: string,config: AxiosRequestConfig = {}): AxiosPromise {
    return this.instance.delete<T>(url,config);
  }

  /**
   * 
   * @param {string} url 
   * @param {object} data 
   * @param {AxiosRequestConfig} config 
   * @returns {AxiosPromise}
   */
  post<T>(url: string, data: object = {}, config: AxiosRequestConfig = {}): AxiosPromise {
    return this.instance.post<T>(url, data, config);
  }

  /**
   * 
   * @param {string} url 
   * @param {object} data 
   * @param {AxiosRequestConfig} config 
   * @returns {AxiosPromise}
   */
  put<T>(url: string, data: object = {}, config: AxiosRequestConfig = {}): AxiosPromise {
    return this.instance.put<T>(url, data, config);
  }
  
  /**
   * 
   * @param {string} url 
   * @param {object} data 
   * @param {AxiosRequestConfig} config
   * @returns {AxiosPromise}
   */
  patch<T>(url: string, data: object = {}, config: AxiosRequestConfig = {}): AxiosPromise {
    return this.instance.patch<T>(url, data, config);
  }

  /**
   * @returns {AxiosInstance} Entrega instancia de axios
   */
  get axiosRef(): AxiosInstance {
    return this.instance
  }

}