
/** @jsx c */
import c from 'canner-script';

const section = props => <object keyName={props.sectionName} title={props.sectionTitle}>
  <string keyName="title" title={`${props.sectionTitle} Title`}/>
  <object keyName="context" ui="editor" title={`${props.sectionTitle} Context`}/>
  <image keyName="image" title={`${props.sectionTitle} Image`}/>
</object>

const social = props => <object keyName={props.socialName} title={props.socialTitle}>
  <string keyName="id" title={`${props.socialName} Id`}/>
  <string keyName="link" ui="link" title={`${props.socialTitle} Address`} />
</object>

const sections = [{
  sectionName: 'main',
  sectionTitle: 'Main'
}, {
  sectionName: 'first',
  sectionTitle: 'First'
}, {
  sectionName: 'second',
  sectionTitle: 'Second'
}, {
  sectionName: 'third',
  sectionTitle: 'Third'
}]

const socials = [{
  socialName: 'facebook',
  socialTitle: 'Facebook'
}, {
  socialName: 'twitter',
  socialTitle: 'Twitter'
}, {
  socialName: 'instagram',
  socialTitle: 'Instagram'
}, {
  socialName: 'medium',
  socialTitle: 'Medium'
}]

export default (
  <root>
    {sections.map(section)}
    <object keyName="content">
      <string keyName="title" />
      <string keyName="description" />
      {socials.map(social)}
    <object>
  </root>
)
