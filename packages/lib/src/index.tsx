//#region imports
import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { hello } from "@test/core";
//#endregion

export interface LibProps {}

export interface State {}

export default function Lib(props: LibProps) {
  const {} = props;

  return <div>Lib {hello()}</div>;
}
