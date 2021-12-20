import { AddressProvider, COLLATERAL_DENOMS, MARKET_DENOMS } from './provider';

export interface AddressMap {
  bLunaHub: string;
  bLunaToken: string;
  bLunaReward: string;
  bLunaAirdrop: string;
  bLunaValidatorsRegistry: string;
  bEthReward: string;
  bEthToken: string;
  mmInterestModel: string;
  mmOracle: string;
  mmMarket: string;
  mmOverseer: string;
  // mmCustody is bluna custody
  mmCustody: string;
  mmCustodyBEth: string;
  mmLiquidation: string;
  mmLiquidationQueue: string;
  mmDistributionModel: string;
  aTerra: string;
  terraswapblunaLunaPair: string;
  terraswapblunaLunaLPToken: string;
  terraswapAncUstPair: string;
  terraswapAncUstLPToken: string;
  astroportbLunaLunaPair: string;
  astroportbLunaLunaLPToken: string;
  astroportAncUstPair: string;
  astroportAncUstLPToken: string;
  gov: string;
  distributor: string;
  collector: string;
  community: string;
  staking: string;
  ANC: string;
  airdrop: string;
  investor_vesting: string;
  team_vesting: string;
}

export type AllowedAddressKeys = keyof AddressMap;

export class AddressProviderFromJson implements AddressProvider {
  constructor(private data: AddressMap) {}

  bLunaReward(): string {
    return this.data.bLunaReward;
  }

  bLunaHub(): string {
    return this.data.bLunaHub;
  }

  bLunaToken(): string {
    return this.data.bLunaToken;
  }

  bEthReward(): string {
    return this.data.bEthReward;
  }

  bLunaValidatorsRegistry(): string {
    return this.data.bLunaValidatorsRegistry;
  }

  bEthToken(): string {
    return this.data.bEthToken;
  }

  market(): string {
    return this.data.mmMarket;
  }

  custody(_denom: MARKET_DENOMS, collateral: COLLATERAL_DENOMS): string {
    switch (collateral) {
      case COLLATERAL_DENOMS.UBLUNA: {
        return this.data.mmCustody;
      }
      case COLLATERAL_DENOMS.UBETH: {
        return this.data.mmCustodyBEth;
      }
    }
  }

  overseer(): string {
    return this.data.mmOverseer;
  }

  aTerra(): string {
    return this.data.aTerra;
  }

  oracle(): string {
    return this.data.mmOracle;
  }

  interest(): string {
    return this.data.mmInterestModel;
  }

  liquidation(): string {
    return this.data.mmLiquidation;
  }

  liquidationQueue(): string {
    return this.data.mmLiquidationQueue;
  }

  terraswapblunaLunaPair(): string {
    return this.data.terraswapblunaLunaPair;
  }

  terraswapblunaLunaLPToken(): string {
    return this.data.terraswapblunaLunaLPToken;
  }

  astroportbLunaLunaPair(): string {
    return this.data.astroportbLunaLunaPair;
  }

  astroportbLunaLunaLPToken(): string {
    return this.data.astroportbLunaLunaLPToken;
  }

  gov(): string {
    return this.data.gov;
  }

  terraswapAncUstPair(): string {
    return this.data.terraswapAncUstPair;
  }

  terraswapAncUstLPToken(): string {
    return this.data.terraswapAncUstLPToken;
  }

  astroportAncUstPair(): string {
    return this.data.astroportAncUstPair;
  }

  astroportAncUstLPToken(): string {
    return this.data.astroportAncUstLPToken;
  }

  collector(): string {
    return this.data.collector;
  }

  staking(): string {
    return this.data.staking;
  }

  community(): string {
    return this.data.community;
  }

  distributor(): string {
    return this.data.distributor;
  }

  ANC(): string {
    return this.data.ANC;
  }

  airdrop(): string {
    return this.data.airdrop;
  }

  investorLock(): string {
    return this.data.investor_vesting;
  }

  teamLock(): string {
    return this.data.team_vesting;
  }
}
