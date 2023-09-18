const AvatarGroup = ({avatars}) => {
    let arr=[]
    for(let i=0;i<avatars;i++)
    {
       arr.push(<div key={i} className="border-2 avatar border-primary">
       <div className="rounded-full w-7 h-7 bg-grey-01">  
       </div>
     </div>)
    }
  return (
   arr
  )
}

export default AvatarGroup