const AvatarGroupCounter = () => {
    let arr=[]
    for(let i=0;i<5;i++)
    {
       arr.push(<div key={i} className="border-2 avatar border-dark-02">
       <div className="w-10 h-10 rounded-full bg-grey-01">  
       </div>
     </div>)
    }
  return (
<div className="-space-x-4 avatar-group">
   {arr}
  <div className="border avatar bg-grey-01 border-dark-02 placeholder">
    <div className="w-10 bg-[#E328AF] text-white font-bold">
      <span>5+</span>
    </div>
  </div>
</div>
  )
}

export default AvatarGroupCounter