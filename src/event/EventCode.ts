
export class EventCode {
    public static Connect = 'connect';
    public static Disconnect = 'disconnect';
    
    public static UserJoin = "user.join";
    public static UserReady = 'user.ready';
    public static UserUnready = "user.unready";

    public static AcceptJoin = "accept.join";

    public static GameReady = 'game.ready';

    public static PlayerError = 'player.error';
    public static PlayerCardDraw = 'player.card.draw';
    public static PlayerCardDiscard = 'player.card.discard';
    public static PlayerGetCards = 'player.get.cards';

    public static GameFinish = "game.finish";

    public static FieldClear = "field.clear";
    public static FieldPut = "field.put";
}