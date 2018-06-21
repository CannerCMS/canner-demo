/** @jsx c */
import c, {Block} from 'canner-script';
import {connector, storage} from './utils';

export default (
  <root connector={connector}>
    <object keyName="header" title="Main page" storage={storage}>
      <string keyName="icon" title="Website icon" />
      <string keyName="title" title="Website title" />
      <object keyName="description" title="Description" ui="editor" />
      <image keyName="background" title="Background" />
      <string keyName="copy" title="Copyright" />
    </object>
    <object keyName="intro" title="Introduction page" storage={storage}>
      <string keyName="title" title="Intro title" />
      <object keyName="content" title="Intro content" ui="editor" />
      <image keyName="image" title="Intro image" ui="image" />
    </object>
    <object keyName="work" title="Work page" storage={storage}>
      <string keyName="title" title="Work title" />
      <object keyName="content" title="Work content" ui="editor" />
      <image keyName="image" title="Work image" ui="image" />
    </object>
    <object keyName="about" title="About page" storage={storage}>
      <string keyName="title" title="About title" />
      <object keyName="content" title="About content" ui="editor" />
      <image keyName="image" title="About image" ui="image" />
    </object>
    <object keyName="contact" title="Contact me" storage={storage}>
      <string keyName="title" title="Contact title" />
      <object keyName="facebook">
        <string keyName="link" title="Your Facebook link" ui="link" />
      </object>
      <object keyName="github">
        <string keyName="link" title="Your Github link" ui="link" />
      </object>
      <object keyName="twitter">
        <string keyName="link" title="Your Twitter link" ui="link" />
      </object>
      <object keyName="instagram">
        <string keyName="link" title="Your Instagram link" ui="link" />
      </object>
    </object>
  </root>
)