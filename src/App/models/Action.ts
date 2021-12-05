export interface Action<Type, Payload = void> {
  payload?: Payload;
  type: Type;
}
