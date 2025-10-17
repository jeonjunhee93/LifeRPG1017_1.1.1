import React, { useState } from 'react';
import silhouette from '../assets/knight-silhouette.png';
import weaponIcon from '../assets/weapon-common.png';

export default function LifeRPG() {
  const [equippedWeapon, setEquippedWeapon] = useState(null);
  const [xp, setXP] = useState(0);
  const [gold, setGold] = useState(0);
  const [stats, setStats] = useState({ strength: 5, intelligence: 3, luck: 1 });

  const handleEquip = () => {
    setEquippedWeapon(weaponIcon);
  };

  const completeQuest = () => {
    setXP(xp + 10);
    setGold(gold + 5);
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div className="character-ui">
        <img src={silhouette} alt="silhouette" style={{ width: '300px' }} />
        {equippedWeapon && (
          <img src={equippedWeapon} alt="weapon" style={{
            position: 'absolute',
            left: '120px',
            top: '300px',
            width: '60px'
          }}/>
        )}
        <button onClick={handleEquip}>Equip Weapon</button>
        <div className="stats">
          <p>XP: {xp}</p>
          <p>Gold: {gold}</p>
          <p>Strength: {stats.strength}</p>
          <p>Intelligence: {stats.intelligence}</p>
          <p>Luck: {stats.luck}</p>
        </div>
      </div>
      <div className="quest-inventory-ui">
        <h2>Quests</h2>
        <div className="inventory-item" onClick={completeQuest}>
          <p>Clean the room (Easy) - +10 XP / +5 Gold</p>
        </div>
        <h2>Inventory</h2>
        <div className="inventory-item" onClick={handleEquip}>
          Weapon (Common)
        </div>
      </div>
    </div>
  );
}