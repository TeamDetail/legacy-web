import styled from "styled-components";

// 메인 컨테이너
export const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

// 타일 마커
export const TileMarker = styled.div<{
  backgroundColor: string;
  borderColor: string;
}>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.backgroundColor};
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    transition: transform 0.2s ease;
  }
`;

// 정보 패널
export const InfoPanel = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 15px;
  border-radius: 8px;
  z-index: 1000;
  font-family: monospace;
  font-size: 12px;
  line-height: 1.4;
  min-width: 250px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const InfoTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InfoSection = styled.div`
  margin-top: 10px;
`;

export const InfoLabel = styled.div`
  font-weight: bold;
`;

export const InfoValue = styled.div`
  margin-left: 8px;
`;

export const MoneyDisplay = styled.div`
  font-weight: bold;
  color: #059669;
  font-size: 13px;
`;

export const CoordinateDisplay = styled.div`
  color: #374151;
`;

// 범례 섹션
export const LegendContainer = styled.div`
  margin-top: 15px;
  font-size: 11px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

export const LegendIcon = styled.div<{
  backgroundColor: string;
}>`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

export const LegendText = styled.span`
  color: #374151;
`;

// 모달 오버레이
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

// 모달 컨테이너
export const ModalContainer = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

// 모달 헤더
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #111827;
`;

export const CloseButton = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0;

  &:hover {
    color: #ef4444;
    transition: color 0.2s ease;
  }
`;

// 모달 콘텐츠
export const ModalContent = styled.div`
  line-height: 1.6;
`;

export const InfoRow = styled.div`
  margin-bottom: 12px;
  color: #374151;
`;

export const InfoRowLabel = styled.strong`
  color: #111827;
`;

export const TileTypeDisplay = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

// 구매 섹션
export const PurchaseSection = styled.div`
  margin-top: 16px;
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const PriceDisplay = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  color: #374151;
`;

export const PriceLabel = styled.strong`
  color: #111827;
`;

export const PurchaseButton = styled.button<{
  disabled: boolean;
}>`
  width: 100%;
  background-color: ${(props) => (props.disabled ? "#9ca3af" : "#3b82f6")};
  color: white;
  padding: 10px;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#9ca3af" : "#2563eb")};
  }
`;

// 유적지 안내
export const HeritageNotice = styled.div`
  margin-top: 16px;
  padding: 12px;
  background-color: #f0f9ff;
  border-radius: 8px;
  color: #065f46;
  border-left: 4px solid #22c55e;
  line-height: 1.5;
`;
