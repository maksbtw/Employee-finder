import teamData from "@api/data";

export async function GET(request: Request, { params }: { params: { id: string } }): Promise<Response> {
    const member: TeamMember | undefined = teamData.find(item => item.id === Number(params.id));

    if (!member) {
        return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(member));
}

