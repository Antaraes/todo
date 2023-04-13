import React from 'react'
import { useState,useEffect } from 'react'
import EditableBlock from './EditableBlock';
const EditablePage = () => {
    const uid = () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
      };
      // console.log(uid());
    const initialBlock = {
        id:uid(),
        html:'',
        tag:'p'
    }
    const setCaretToEnd = (element) => {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(element);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
      element.focus();
    };
    const updatePageHandler = (updatedBlock) => {
      const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);
      const updatedBlocks = [...blocks];
      updatedBlocks[index] = {
        ...updatedBlocks[index],
        tag: updatedBlock.tag,
        html: updatedBlock.html
      };
      setBlocks(updatedBlocks);
    }
    const addBlockHandler = (currentBlock) => {
      const newBlock = { id: uid(), html: "", tag: "p" };
      const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
      const updatedBlocks = [...blocks];
      updatedBlocks.splice(index + 1, 0, newBlock);
      setBlocks(updatedBlocks, () => {
        currentBlock.ref.nextElementSibling.focus();
      });
    }
    const deleteBlockHandler = (currentBlock) => {
      const previousBlock = currentBlock.ref.previousElementSibling;
      if (previousBlock) {
        const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
        const updatedBlocks = [...blocks];
        updatedBlocks.splice(index, 1);
        setBlocks(updatedBlocks, () => {
          setCaretToEnd(previousBlock);
          previousBlock.focus();
        });
      }
    }
    
    const [blocks,setBlocks] = useState([initialBlock])
  return (
    <div className='Page'>
        {
          blocks.map((block,key)=>{
            return(
              <EditableBlock 
                key={key}
                id={block.id}
                tag={block.tag}
                html={block.html}
                updatePage = {updatePageHandler}
                addBlock={addBlockHandler}
                deleteBlock ={deleteBlockHandler}
              />
            )
          })
        }
    </div>
  )
}

export default EditablePage