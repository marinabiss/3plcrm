import React from "react"

function Container(props) {
  return <div className={+(props.wide ? "" : "container--narrow")}>{props.children}</div>
}

export default Container
