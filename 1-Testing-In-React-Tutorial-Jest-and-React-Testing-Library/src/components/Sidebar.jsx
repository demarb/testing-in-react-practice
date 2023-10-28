import React from 'react'

export default function Sidebar({items}) {
  return (
    <>
        <div>
            {items.map((item)=>{
                return (
                    <div key={item.href}>
                        <a role='navigation' href={item.href} >
                            {item.name}
                        </a>
                    </div>
                )

            })}
        </div>

        {/* <div key="sjhdgchshbchjsbj">
            <a role='navigation' href="/test1" >
                Test 1
            </a>
        </div>

        <div key="lschcyusdiuksdj">
            <a role='navigation' href="/test2" >
                Test 2
            </a>
        </div> */}
    </>
    
  )
}
