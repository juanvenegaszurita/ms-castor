// Error 
export interface ReturnError<dataType> {
  status: number;
  statusText: string;
  name: string;
  error: ReturnServiceMS<dataType>;
}

// OK
export interface ReturnServiceMS<dataType> {
  code: string;
  message: string;
  payload: dataType;
}