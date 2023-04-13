import React,{useEffect, useState} from 'react'
import { useRef } from 'react';
import ContentEditable from 'react-contenteditable'
const EditableBlock = (props) => {
  const [html,setHtml] = useState(props.html);
  const [tag,setTag] = useState(props.tag);
  const contentEditable = useRef(null)
  // useEffect(()=>{
  //   setHtml(props.html);
  //   setTag(props.tag);

  // },[props]);

  // useEffect(()=>{
  //   props.updatePage({
  //     id:props.id,
  //     html:html,
  //     tag:tag,
  //   })
  // },[html,tag,props]);

  const onChangeHandler = (e) =>{
    setHtml(e.target.value)
  }

  return (
    <div>
      <ContentEditable
        className='Block'
        innerRef={contentEditable}
        html={html}
        tagName={tag}
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default EditableBlock