figma.showUI(__html__);
figma.ui.onmessage = (msg: { type: string, width: number, height: number, list: string[] }) => {
  if (msg.type === 'create-named-frames') {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < msg.list.length; ++i) {
      const frame = figma.createFrame();
      frame.x = i * (msg.width + 10);
      frame.name = msg.list[i];
      frame.resize(msg.width, msg.height);
      frame.fills = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
      figma.currentPage.appendChild(frame);
      nodes.push(frame);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
  figma.closePlugin();
};
