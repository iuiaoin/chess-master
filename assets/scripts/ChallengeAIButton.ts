const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  onClick() {
    cc.director.loadScene("board");
  }
}
