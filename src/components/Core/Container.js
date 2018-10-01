import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  ${({ flexColumn }) => flexColumn ? 'flex-direction: column;' : ''}
  ${({ m = 0 }) => m ? css`margin: ${m}px;`: null}
  ${({ mb = 0 }) => mb ? css`margin-bottom: ${mb}px;` : null}
  ${({ mt = 0 }) => mt ? css`margin-top: ${mt}px;` : null}
  ${({ ml = 0 }) => ml ? css`margin-left: ${ml}px;` : null}
  ${({ mr = 0 }) => mr ? css`margin-right: ${mr}px;` : null}
  ${({ mx = 0 }) => mx ? css`margin-right: ${mx}px; margin-left: ${mx}px;` : null}
  ${({ my = 0 }) => my ? css`margin-top: ${my}px; margin-bottom: ${my}px;` : null}
  ${({ p = 0 }) => p ? css`padding: ${p}px;` : null}
  ${({ pb = 0 }) => pb ? css`padding-bottom: ${pb}px;` : null}
  ${({ pt = 0 }) => pt ? css`padding-top: ${pt}px;` : null}
  ${({ pl = 0 }) => pl ? css`padding-left: ${pl}px;` : null}
  ${({ pr = 0 }) => pr ? css`padding-right: ${pr}px;`: null}
  ${({ px = 0 }) => px ? css`padding-right: ${px}px; padding-left: ${px}px;` : null}
  ${({ py = 0 }) => py ? css`padding-top: ${py}px; padding-bottom: ${py}px;` : null}
`;
