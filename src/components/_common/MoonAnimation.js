import './Moon.css';

export default function MoonAnimation({ size, isActive })  {
    return (
        <div style={{width: size, height: size}} className={`${isActive && 'active'} Moon`} aria-label='Moon animation credit Jon Shamir'>
            <div className={`${isActive && 'active'} Rotator`}></div>
        </div>
    )
}