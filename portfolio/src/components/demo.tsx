import { AvatarGroup } from "./ui/avatar-group"

const Demo = () => {
    return (
        <div className="p-8">
            <h2 className="text-xl font-bold mb-4">Avatar Group Demo</h2>
            <AvatarGroup
                avatars={[
                {
                    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60",
                    label: "Jane Doe",
                },
                {
                    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&auto=format&fit=crop&q=60",
                    label: "John Smith",
                },
                {
                    src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&auto=format&fit=crop&q=60",
                    label: "Alex Johnson",
                },
                { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=60", label: "Sarah Davis" },
                { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&fit=crop&q=60", label: "Emily Clark" },
                { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=60", label: "Michael Brown" },
                ]}
                maxVisible={4}
                size={45}
            />
        </div>
    )
}

export {Demo}
