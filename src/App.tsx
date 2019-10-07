import * as React from 'react';
import { useState, useCallback } from 'react';
import { TitlePage } from './containers/TitlePage';
import { MemoryRouter, Switch, Route } from 'react-router';
import { EvokerSelectPage } from './containers/EvokerSelectPage';
import { SummonSelectPage } from './containers/SummonSelectPage';
import { InventoryPage } from './containers/InventoryPage';
import { ResultPage } from './containers/ResultPage';
import { ArcarumContext, AdditionalTicketInfo, RenewalEventInterval } from './context/arcarum_context';
import { EvokerData } from './data/arcarum';
import { GbfInventory } from './lib/gbf';
import { EventPage } from './containers/EventPage';

export const App = () => {
  const [targetEvoker, setTargetEvoker] = useState<EvokerData | undefined>();
  const [summonLevel, setSummonLevel] = useState<number>(0);
  const [inventory, setInventory] = useState<GbfInventory>({
    sephiraStone: 0,
    astra: 0,
    idean: 0,
    fragment: 0,
    arcarumPoint: 0
  });
  const [additionalTicketInfo, setAdditionalTicketInfo] = useState<AdditionalTicketInfo>({
    startAt: 'unknown',
    days: 10
  });
  const [renewalEventInterval, setRenewalEventInterval] = useState<RenewalEventInterval>('monthly');

  return (
    <MemoryRouter>
      <ArcarumContext.Provider
        value={{
          targetEvoker,
          summonLevel,
          inventory,
          additionalTicketInfo,
          renewalEventInterval,
          setTargetEvoker,
          setSummonLevel,
          setInventory,
          setAdditionalTicketInfo,
          setRenewalEventInterval
        }}
      >
        <Switch>
          <Route path="/" exact component={TitlePage} />
          <Route path="/evoker" exact component={EvokerSelectPage} />
          <Route path="/summon" exact component={SummonSelectPage} />
          <Route path="/inventory" exact component={InventoryPage} />
          <Route path="/event" exact component={EventPage} />
          <Route path="/result" exact component={ResultPage} />
        </Switch>
      </ArcarumContext.Provider>
    </MemoryRouter>
  );
};