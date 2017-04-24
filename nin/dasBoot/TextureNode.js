class TextureNode extends NIN.Node {
  constructor(id, options) {
    super(id, {
      inputs: {},
      outputs: {
        A: new NIN.TextureOutput()
      }
    });
    var that = this;
    this.texture = Loader.loadTexture(options.path);
    this.outputs.A.setValue(this.texture);
  }
}

module.exports = TextureNode;
