import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductDetail } from './index';

// Mock child components
vi.mock('../ProductNavigation', () => ({
  ProductNavigation: () => <div data-testid="product-navigation">ProductNavigation</div>,
}));

vi.mock('../ProductImage', () => ({
  ProductImage: () => <div data-testid="product-image">ProductImage</div>,
}));

vi.mock('../ProductInfo', () => ({
  ProductInfo: () => <div data-testid="product-info">ProductInfo</div>,
}));

vi.mock('../ProductMeta', () => ({
  ProductMeta: () => <div data-testid="product-meta">ProductMeta</div>,
}));

vi.mock('../ProductActions', () => ({
  ProductActions: () => <div data-testid="product-actions">ProductActions</div>,
}));

describe('ProductDetail', () => {
  it('renders without errors', () => {
    const { container } = render(<ProductDetail />);
    const rootElement = container.firstChild as HTMLElement;
    expect(rootElement).toBeInTheDocument();
    expect(rootElement.tagName).toBe('DIV');
  });

  it('renders ProductNavigation component', () => {
    render(<ProductDetail />);
    expect(screen.getByTestId('product-navigation')).toBeInTheDocument();
  });

  it('renders ProductImage component', () => {
    render(<ProductDetail />);
    expect(screen.getByTestId('product-image')).toBeInTheDocument();
  });

  it('renders ProductInfo component', () => {
    render(<ProductDetail />);
    expect(screen.getByTestId('product-info')).toBeInTheDocument();
  });

  it('renders ProductMeta component', () => {
    render(<ProductDetail />);
    expect(screen.getByTestId('product-meta')).toBeInTheDocument();
  });

  it('renders ProductActions component', () => {
    render(<ProductDetail />);
    expect(screen.getByTestId('product-actions')).toBeInTheDocument();
  });

  it('has correct structure with container div', () => {
    const { container } = render(<ProductDetail />);
    const containerDiv = container.firstChild as HTMLElement;
    expect(containerDiv).toBeInTheDocument();
    expect(containerDiv.className).toMatch(/container/);
  });

  it('has correct structure with product div', () => {
    const { container } = render(<ProductDetail />);
    const containerDiv = container.firstChild as HTMLElement;
    const productDiv = containerDiv.querySelector('[class*="product"]');
    expect(productDiv).toBeInTheDocument();
    expect(productDiv?.className).toMatch(/product/);
  });

  it('has correct structure with infoSection div', () => {
    const { container } = render(<ProductDetail />);
    const containerDiv = container.firstChild as HTMLElement;
    const infoSectionDiv = containerDiv.querySelector('[class*="infoSection"]');
    expect(infoSectionDiv).toBeInTheDocument();
    expect(infoSectionDiv?.className).toMatch(/infoSection/);
  });

  it('renders all child components', () => {
    render(<ProductDetail />);
    const navigation = screen.getByTestId('product-navigation');
    const image = screen.getByTestId('product-image');
    const info = screen.getByTestId('product-info');
    const meta = screen.getByTestId('product-meta');
    const actions = screen.getByTestId('product-actions');

    // Verify all components are present
    expect(navigation).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(meta).toBeInTheDocument();
    expect(actions).toBeInTheDocument();
  });

  it('renders ProductInfo, ProductMeta, and ProductActions inside infoSection', () => {
    const { container } = render(<ProductDetail />);
    const containerDiv = container.firstChild as HTMLElement;
    const infoSection = containerDiv.querySelector('[class*="infoSection"]');
    
    expect(infoSection).toBeInTheDocument();
    
    // Check that info, meta, and actions are children of infoSection
    const info = screen.getByTestId('product-info');
    const meta = screen.getByTestId('product-meta');
    const actions = screen.getByTestId('product-actions');
    
    expect(infoSection).toContainElement(info);
    expect(infoSection).toContainElement(meta);
    expect(infoSection).toContainElement(actions);
  });

  it('renders ProductImage outside of infoSection', () => {
    const { container } = render(<ProductDetail />);
    const containerDiv = container.firstChild as HTMLElement;
    const infoSection = containerDiv.querySelector('[class*="infoSection"]');
    const image = screen.getByTestId('product-image');
    
    expect(infoSection).not.toContainElement(image);
  });
});
