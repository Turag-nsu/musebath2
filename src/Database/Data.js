import serviceBg1 from '../Images/service-bg-1.webp'
import serviceCardPic1 from '../Images/service-area-1-pic-1'
import service1pic1 from '../Images/Service/service-1-renovation.webp'
import service1pic2 from '../Images/Service/service-1-pic-2.webp'
import service1pic3 from '../Images/Service/service-1-pic-3.webp'
import service1pic4 from '../Images/Service/service-1-pic-4.webp'
import service1pic5 from '../Images/Service/service-1-pic-5.webp'
import service1buildImage from '../Images/Service/service-1-build-service.webp'
import service1complementarypic from '../Images/Service/service-1-complementary-pic.webp'
import serviceBg2 from '../Images/Service/service-2-herobg.webp'
import serviceCardPic2 from '../Images/Service/service-2-renovation.webp'
import service2pic1 from '../Images/Service/service-2-pic-1.webp'
import service2pic2 from '../Images/Service/service-2-pic-2.webp'
import service2pic3 from '../Images/Service/service-2-pic-3.webp'
import service2pic4 from '../Images/Service/service-2-pic-4.webp'
import service2pic5 from '../Images/Service/service-2-pic-5.webp'
import service2buildImage from '../Images/Service/service-2-build-service.webp'
import service2complementarypic from '../Images/Service/service-2-complementary.webp'
import reviewer1 from '../Images/profile-1.png'
import reviewer2 from '../Images/profile-2.png'
import serviceBg3 from '../Images/Service/service-3-herobg.webp'
import serviceCardPic3 from '../Images/Service/service-3-renovation.webp'
import service3pic1 from '../Images/Service/service-3-pic-1.webp'
import service3pic2 from '../Images/Service/service-3-pic-2.webp'
import service3pic3 from '../Images/Service/service-3-pic-3.webp'
import service3pic4 from '../Images/Service/service-3-pic-4.webp'
import service3pic5 from '../Images/Service/service-3-pic-5.webp'
import service3buildImage from '../Images/Service/service-3-build-service.webp'
import service3complementarypic from '../Images/Service/service-3-complementary.webp'




const data = [
    {
        service1: {
            id: 1,
            hero: {
                title: "Complete Bathroom Remodeling",
                image: serviceBg1,

            },
            renovation: {
                image: serviceCardPic1,
                title: "Simplified Full Bathroom Renovation",
                body1: "In the hottest housing market, investing in a kitchen or bathroom remodel is a great investment that often returns more than 100% of the cost.",
                body2: "Muse Bath will give you a complete bathroom renovation without any headaches. We don't cover up or hide issues. We use our exclusive complete bath remodel to remove old materials and fixtures, and replace them with beautiful options."
            },
            gallery: {
                title: "Complete Bathroom Remodel Showcase",
                images: [service1pic1, service1pic2, service1pic3, service1pic4, service1pic5]
            },
            buildService: {
                image: service1buildImage,
            },
            complementaryService: {
                title: "Full Bathroom Remodeling",
                body1: "The most expensive bathroom remodeling option is a fully customized bathroom. Custom Bathroom Remodels go beyond the standard pull-and-replace renovation. If you are planning to add an addition to your home or completely redesign the bathroom, then it is considered a custom remodel. A custom bathroom remodel will likely include removing and relocating the tub, shower and toilet. This is especially true in larger bathrooms to enhance the functionality. Construction planning is required to determine where the new plumbing will run, the layout of the floor joists, the way the electrical work will be completed and which walls carry the load. These are all important factors to consider from the beginning because they could add to the price of the bathroom. You should also remodel your bathroom to make it work best for you.",
                body2: "",
                image: service1complementarypic,
            },
            testimonial: {
                body: "Muse Bath has truly redefined my bathing experience with their exceptional products. From their exquisite selection of bath salts to their soothing aromatherapy mists, every product is a testament to their commitment to quality and relaxation. The carefully curated ingredients and captivating scents transform my daily bath routine into a luxurious and rejuvenating ritual. Muse Bath's attention to detail and dedication to creating a serene atmosphere make them my go-to choice for elevating self-care moments.",
                reviewer: {
                    name: "Theresa Webb",
                    title: "Product designer",
                    image: reviewer1,
                }
            },
        },
        service2: {
            id: 2,
            hero: {
                title: "Bathtub-shower conversions",
                image: serviceBg2,

            },
            renovation: {
                image: serviceCardPic2,
                title: "Begin on your bathroom makeover journey",
                body1: "Even after frequent cleaning, the daily usage of your bathtub or shower can lead to visible wear.",
                body2: "Muse Bath’s fast and durable tub and shower conversions can be customized to meet your needs, and will complement the appearance of your bathroom."
            },
            gallery: {
                title: "Bathtub-shower conversions Showcase",
                images: [service2pic1, service2pic2, service2pic3, service2pic4, service2pic5]
            },
            buildService: {
                image: service2buildImage,
            },
            complementaryService: {
                title: "Half bathroom Remodeling",
                body1: "Are you tired of the noticeable signs of wear and tear in your shower or tub? Perhaps you're looking to update the design of your space or add accessibility and safety features. Whatever the reason may be, the transformation from a shower to a tub or vice versa can bring a fresh new look and functionality to your bathroom.",
                body2: "If your current tub or shower has seen better days, it's time for a change. Over time, constant use and exposure to water can cause cracks, stains, and other signs of wear and tear that can make your bathroom appear outdated and uninviting. By making the switch from a tired tub or shower to its counterpart, you can instantly breathe new life into your space.",
                image: service2complementarypic,
            },
            testimonial: {
                body: "Muse Bath has truly redefined my bathing experience with their exceptional products. From their exquisite selection of bath salts to their soothing aromatherapy mists, every product is a testament to their commitment to quality and relaxation. The carefully curated ingredients and captivating scents transform my daily bath routine into a luxurious and rejuvenating ritual. Muse Bath's attention to detail and dedication to creating a serene atmosphere make them my go-to choice for elevating self-care moments.",
                reviewer: {
                    name: "Theresa Webb",
                    title: "Product designer",
                    image: reviewer2,
                }
            }
        },
        service3: {
            id: 3,
            hero: {
                title: "Senior friendly bathroom",
                image: serviceBg3,

            },
            renovation: {
                image: serviceCardPic3,
                title: "Bathroom Solutions for Aging and Accessibility",
                body1: "Creating an accessible bathroom is crucial for ensuring the comfort and safety of both elderly and disabled individuals. By making necessary modifications, we can significantly improve their quality of life and independence.",
                body2: "When designing an accessible bathroom, it is important to consider the specific needs of these individuals. Installing grab bars near the toilet and in the shower area can provide stability and support for those with limited mobility. Additionally, incorporating a raised toilet seat or a commode chair can make it easier for older or disabled individuals to use the facilities."
            },
            gallery: {
                title: "Senior friendly bathroom Showcase",
                images: [service3pic1, service3pic2, service3pic3, service3pic4, service3pic5]
            },
            buildService: {
                image: service3buildImage,
            },
            complementaryService: {
                title: "Accessible Bathroom",
                body1: "Ensuring accessibility in bathrooms is essential for the comfort and safety of both disabled and elderly individuals. By making bathrooms accessible, we can empower these individuals to maintain their independence and dignity.",
                body2: "When designing a bathroom for disabled or elderly people, it is crucial to consider their unique needs. Installing grab bars near the toilet and shower area can provide stability and support while transferring from one surface to another. Additionally, incorporating non-slip flooring materials can prevent accidents caused by slippery surfaces.",
                image: service3complementarypic,
            },
            testimonial: {
                body: "Muse Bath has truly redefined my bathing experience with their exceptional products. From their exquisite selection of bath salts to their soothing aromatherapy mists, every product is a testament to their commitment to quality and relaxation. The carefully curated ingredients and captivating scents transform my daily bath routine into a luxurious and rejuvenating ritual. Muse Bath's attention to detail and dedication to creating a serene atmosphere make them my go-to choice for elevating self-care moments.",
                reviewer: {
                    name: "Theresa Webb",
                    title: "Product designer",
                    image: reviewer1,
                }
            }
        },

        
    }
]

export default data;