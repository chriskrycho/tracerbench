import { ITraceEvent, Trace } from 'tracerbench';

export interface ITrace {
  metadata: {};
  traceEvents: ITraceEvent[];
}

export function loadTrace(events: ITraceEvent[] | ITrace) {
  const trace = new Trace();
  if (!Array.isArray(events)) {
    events = events.traceEvents;
  }
  trace.addEvents(events);
  trace.buildModel();
  return trace;
}
