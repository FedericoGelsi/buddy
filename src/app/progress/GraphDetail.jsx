"use client";
import React from "react";

export default function GraphDetail(props) {
  return (
    <div style={{flex: '1 1 0', height: 144, padding: 24, background: 'white', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
    <div style={{flex: '1 1 0', height: 96, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
          <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', color: '#2C2C2E', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>{props.title}</div>
              <div style={{alignSelf: 'stretch', color: '#404042', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>{props.description}</div>
          </div>
          <div style={{width: 96, height: 96, position: 'relative'}}>
              <div style={{width: 96, height: 96, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 9999}} />
              <div style={{width: 96, height: 96, left: 0, top: 0, position: 'absolute', background: '#EBEBEC', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
              <div style={{width: 96, height: 96, left: 0, top: 0, position: 'absolute', background: '#AFD778', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
              <div style={{width: 57, height: 31, left: 20, top: 33, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'inline-flex'}}>
                  <div style={{color: '#2C2C2E', fontSize: 24, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>{props.value}</div>
                  <div style={{paddingTop: 5, paddingBottom: 5, justifyContent: 'flex-start', alignItems: 'flex-end', gap: 10, display: 'flex'}}>
                      <div style={{color: '#404042', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>/100</div>
                  </div>
              </div>
          </div>
      </div>
      </div>
  );
}
