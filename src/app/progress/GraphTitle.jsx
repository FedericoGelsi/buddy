"use client";
import React from "react";

export default function GraphTitle(props) {
  return (
    <div style={{width: '100%', height: '100%', padding: 24, background: 'white', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
        <div style={{flex: '1 1 0', height: 144, padding: 24, background: 'white', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}></div>
        <div style={{alignSelf: 'stretch', height: 264, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', height: 48, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: '#2C2C2E', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>{props.title}</div>
            </div>
            <div style={{width: 192, height: 192, position: 'relative'}}>
                <div style={{width: 192, height: 192, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 9999}} />
                <div style={{width: 192, height: 192, left: 0, top: 0, position: 'absolute', background: '#EBEBEC', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                <div style={{width: 192, height: 192, left: 0, top: 0, position: 'absolute', background: '#AFD778', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                <div style={{width: 70, height: 62, left: 61, top: 65, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'inline-flex'}}>
                    <div style={{color: '#2C2C2E', fontSize: 48, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>{props.value}</div>
                    <div style={{paddingBottom: 12, justifyContent: 'flex-start', alignItems: 'flex-end', gap: 10, display: 'flex'}}>
                        <div style={{color: '#404042', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
