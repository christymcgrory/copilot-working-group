import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProductDetail } from './index';

// Mock all child components
vi.mock('../ProductNavigation', () => ({
  ProductNavigation: () => <div data-testid="product-navigation">ProductNavigation Mock</div>,
}));

vi.mock('../ProductImage', () => ({
  ProductImage: () => <div data-testid="product-image">ProductImage Mock</div>,
}));

vi.mock('../ProductInfo', () => ({
  ProductInfo: () => <div data-testid="product-info">ProductInfo Mock</div>,
}));

vi.mock('../ProductMeta', () => ({
  ProductMeta: () => <div data-testid="product-meta">ProductMeta Mock</div>,
}));

vi.mock('../ProductActions', () => ({
  ProductActions: () => <div data-testid="product-actions">ProductActions Mock</div>,
}));

describe('ProductDetail', () => {
  it('renders without errors', () => {
    const { container } = render(<ProductDetail />);
    expect(container).toBeInTheDocument();
  });

  it('renders all child components', () => {
    render(<ProductDetail />);
    
    expect(screen.getByTestId('product-navigation')).toBeInTheDocument();
    expect(screen.getByTestId('product-image')).toBeInTheDocument();
    expect(screen.getByTestId('product-info')).toBeInTheDocument();
    expect(screen.getByTestId('product-meta')).toBeInTheDocument();
    expect(screen.getByTestId('product-actions')).toBeInTheDocument();
  });

  it('applies CSS module classes correctly', () => {
    const { container } = render(<ProductDetail />);
    
    // Check for container class
    const containerDiv = container.querySelector('[class*="container"]');
    expect(containerDiv).toBeInTheDocument();
    
    // Check for product class
    const productDiv = container.querySelector('[class*="product"]');
    expect(productDiv).toBeInTheDocument();
    
    // Check for infoSection class
    const infoSectionDiv = container.querySelector('[class*="infoSection"]');
    expect(infoSectionDiv).toBeInTheDocument();
  });

  it('renders components in the correct structure', () => {
    const { container } = render(<ProductDetail />);
    
    // ProductNavigation should be a direct child of container
    const containerDiv = container.querySelector('[class*="container"]');
    expect(containerDiv?.querySelector('[data-testid="product-navigation"]')).toBeInTheDocument();
    
    // ProductImage should be within the product section
    const productDiv = container.querySelector('[class*="product"]');
    expect(productDiv?.querySelector('[data-testid="product-image"]')).toBeInTheDocument();
    
    // ProductInfo, ProductMeta, and ProductActions should be within infoSection
    const infoSectionDiv = container.querySelector('[class*="infoSection"]');
    expect(infoSectionDiv?.querySelector('[data-testid="product-info"]')).toBeInTheDocument();
    expect(infoSectionDiv?.querySelector('[data-testid="product-meta"]')).toBeInTheDocument();
    expect(infoSectionDiv?.querySelector('[data-testid="product-actions"]')).toBeInTheDocument();
  });

  it('maintains proper layout hierarchy', () => {
    const { container } = render(<ProductDetail />);
    
    const infoSection = container.querySelector('[class*="infoSection"]');
    expect(infoSection).toBeInTheDocument();
    
    // Verify infoSection contains exactly 3 child components
    const infoSectionChildren = infoSection?.querySelectorAll('[data-testid]');
    expect(infoSectionChildren?.length).toBe(3);
  });
});
