/** @jsx c */
import c from 'canner-script';

export default (
  <root>
    <object keyName="main" title="Main page">
      <string keyName="title" title="Website Title" description="Please enter a title of your website"/>
      <object keyName="description" ui="editor"  title="Description" description="Enter description of your website" />
      <string keyName="twitter" ui="link" title="Twitter" description="Twitter account"/>
      <string keyName="github" ui="link" title="Github" description="Github account"/>
      <string keyName="instagram" ui="link"  title="Instagram" description="Instagram account"/>
      <string keyName="email" ui="link" title="Email" description="Enter your Email here"/>
      <string keyName="copy" title="Copyright" description="What is your copyright?"/>
    </object>
    <array keyName="photos" title="Gallery" ui="panel">
      <string keyName="imgTitle" title="Image title"/>
      <string keyName="imgDescription" title="Image description"/>
      <image keyName="image" title="Main image"/>
      <image keyName="thumb" title="Thumb image"/>
    </array>
  </root>
)