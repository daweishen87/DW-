"use client";
import { useState } from "react";
import { Mascot, type Pose } from "./Mascot";

const moves: { id: string; name: string; pose: Pose; text: string }[] = [
  { id: "bench", name: "臥推", pose: "squash", text: "槓鈴很重的時候，手腕要撐住它。臥推是常見會考慮戴護腕的動作，感受會因重量、綁法和個人而不同。" },
  { id: "ohp", name: "肩推", pose: "press", text: "槓鈴在頭上推，手腕一樣在承受負荷。肩推也是常見的護腕使用情境。" },
  { id: "curl", name: "二頭彎舉", pose: "curl", text: "彎舉不一定需要護腕。手腕沒有負擔的動作，可以不戴。" },
];

export function Picker() {
  const [i, setI] = useState(0);
  const m = moves[i];
  return (
    <div className="picker wrap">
      <h2><span className="zh">今天練什麼？</span></h2>
      <div className="picker-body">
        <div className="picker-fig">
          <Mascot pose={m.pose} size={200} />
          <p className="note">卡通示意，點小人可重播</p>
        </div>
        <div>
          <div className="tabs" role="group" aria-label="選擇訓練動作">
            {moves.map((x, k) => (
              <button key={x.id} type="button" aria-pressed={k === i} onClick={() => setI(k)}>{x.name}</button>
            ))}
          </div>
          <p className="picker-text" aria-live="polite">{m.text}</p>
          <p className="note">護腕不能取代正確的動作與適當的重量，也不保證預防受傷。</p>
        </div>
      </div>
    </div>
  );
}
