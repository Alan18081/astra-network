import {WsResponse} from '@nestjs/websockets';
export const JOIN_ROOM = 'JOIN_ROOM';
export const LEAVE_ROOM = 'LEAVE_ROOM';

export class JoinRoom implements WsResponse {
  readonly event = JOIN_ROOM;
  constructor(public data = null) {}
}

export class LeaveRoom implements WsResponse {
  readonly event = LEAVE_ROOM;
  constructor(public data = null) {}
}